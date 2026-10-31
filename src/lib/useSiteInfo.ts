'use client';

import { useState, useEffect } from 'react';
import { companyInfo } from '@/data/mockData';
import { defaultFooterConfig } from '@/data/defaultCmsConfig';

export interface SiteInfo {
  phone: string;
  phoneClean: string;
  email: string;
  address: string;
  workingHours: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

/**
 * Single source of truth for company contact details and social links on the
 * public site. Values come from the live CMS (the admin Footer module); until
 * that loads we fall back to the committed defaults so nothing renders blank.
 *
 * Use this in any client component/page that shows the phone, email, address,
 * working hours or social links, so a change made once in the admin propagates
 * everywhere.
 */
export function useSiteInfo(): SiteInfo {
  const [info, setInfo] = useState<SiteInfo>({
    phone: defaultFooterConfig.phone || companyInfo.phone,
    phoneClean: defaultFooterConfig.phoneClean || companyInfo.phoneClean,
    email: defaultFooterConfig.email || companyInfo.email,
    address: defaultFooterConfig.address || companyInfo.address,
    workingHours: defaultFooterConfig.workingHours || companyInfo.workingHours,
    social: defaultFooterConfig.social || companyInfo.social,
  });

  useEffect(() => {
    let active = true;
    fetch('/api/admin')
      .then((r) => r.json())
      .then((data) => {
        const f = data?.cms?.footer;
        if (!active || !f) return;
        setInfo({
          phone: f.phone || companyInfo.phone,
          phoneClean: f.phoneClean || companyInfo.phoneClean,
          email: f.email || companyInfo.email,
          address: f.address || companyInfo.address,
          workingHours: f.workingHours || companyInfo.workingHours,
          social: f.social || companyInfo.social,
        });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return info;
}
