import React from 'react';

interface RichTextProps {
  html?: string;
  className?: string;
  as?: 'div' | 'span';
}

/**
 * Renders admin-authored rich-text (HTML) content on the public site.
 * Plain strings (no tags) render exactly as before, so this is a safe
 * drop-in for fields that were previously printed as plain text.
 * Content is authored only in the authenticated admin, but we still strip
 * <script>/<style>, inline event handlers, and javascript: URLs defensively.
 */
function sanitize(html: string): string {
  return String(html)
    .replace(/<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, '$1=$2#$2');
}

export default function RichText({ html, className, as = 'div' }: RichTextProps) {
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: sanitize(html || '') }} />;
}
