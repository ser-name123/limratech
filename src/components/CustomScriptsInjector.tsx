'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  defaultHeaderConfig,
  defaultFooterConfig,
  defaultSeoConfig,
} from '@/data/defaultCmsConfig';

export default function CustomScriptsInjector({
  position,
}: {
  position: 'header' | 'body_start' | 'footer';
}) {
  const pathname = usePathname();
  const [rawHtml, setRawHtml] = useState<string>('');

  useEffect(() => {
    // Do not inject external tracking scripts inside the /admin or /admin/editor workspace
    if (pathname?.startsWith('/admin')) return;

    let mounted = true;
    fetch('/api/admin')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted || !data?.cms) return;
        const headerCfg = data.cms.header || defaultHeaderConfig;
        const footerCfg = data.cms.footer || defaultFooterConfig;
        const seoCfg = data.cms.seo || defaultSeoConfig;
        const snippets = seoCfg.customScripts || defaultSeoConfig.customScripts || [];

        const matchingSnippets = snippets
          .filter(
            (s: any) =>
              s.enabled &&
              s.placement === position &&
              (s.pageScope === 'All Pages (*)' ||
                s.pageScope === '*' ||
                s.pageScope === pathname)
          )
          .map((s: any) => s.code)
          .join('\n');

        if (position === 'header') {
          setRawHtml(`${headerCfg.customHeadScripts || ''}\n${matchingSnippets}`.trim());
        } else if (position === 'body_start') {
          setRawHtml(`${headerCfg.customBodyStartScripts || ''}\n${matchingSnippets}`.trim());
        } else {
          setRawHtml(`${footerCfg.customFooterScripts || ''}\n${matchingSnippets}`.trim());
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [pathname, position]);

  if (!rawHtml || pathname?.startsWith('/admin')) return null;

  return (
    <div
      data-limra-script-slot={position}
      className="hidden"
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
