'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  RemoveFormatting,
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}

/**
 * Dependency-free WYSIWYG editor for admin content fields.
 * Stores HTML; render it on the public site with the matching <RichText/> component.
 * Short/plain fields (titles, meta, code) should keep using a normal input/textarea.
 */
export default function RichTextEditor({ value, onChange, placeholder, minHeight = 120 }: RichTextEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  // Sync external value in only when it differs and the field isn't being edited,
  // so we never clobber the caret position while typing.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!focused && el.innerHTML !== (value || '')) {
      el.innerHTML = value || '';
    }
  }, [value, focused]);

  const exec = (command: string, arg?: string) => {
    ref.current?.focus();
    try {
      document.execCommand(command, false, arg);
    } catch {
      /* execCommand is deprecated but universally supported for basic formatting */
    }
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const handleInput = () => {
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const addLink = () => {
    const url = window.prompt('Enter the URL (https://…)');
    if (url) exec('createLink', url);
  };

  const Btn = ({ title, onClick, children }: { title: string; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-md text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
    >
      {children}
    </button>
  );

  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden focus-within:border-purple-500 transition-colors">
      <div className="flex flex-wrap items-center gap-0.5 px-1.5 py-1 border-b border-slate-100 bg-slate-50/80">
        <Btn title="Bold" onClick={() => exec('bold')}><Bold className="w-3.5 h-3.5" /></Btn>
        <Btn title="Italic" onClick={() => exec('italic')}><Italic className="w-3.5 h-3.5" /></Btn>
        <Btn title="Underline" onClick={() => exec('underline')}><Underline className="w-3.5 h-3.5" /></Btn>
        <span className="w-px h-5 bg-slate-200 mx-0.5" />
        <Btn title="Heading" onClick={() => exec('formatBlock', 'h2')}><Heading2 className="w-3.5 h-3.5" /></Btn>
        <Btn title="Subheading" onClick={() => exec('formatBlock', 'h3')}><Heading3 className="w-3.5 h-3.5" /></Btn>
        <Btn title="Quote" onClick={() => exec('formatBlock', 'blockquote')}><Quote className="w-3.5 h-3.5" /></Btn>
        <span className="w-px h-5 bg-slate-200 mx-0.5" />
        <Btn title="Bullet list" onClick={() => exec('insertUnorderedList')}><List className="w-3.5 h-3.5" /></Btn>
        <Btn title="Numbered list" onClick={() => exec('insertOrderedList')}><ListOrdered className="w-3.5 h-3.5" /></Btn>
        <Btn title="Link" onClick={addLink}><Link2 className="w-3.5 h-3.5" /></Btn>
        <span className="w-px h-5 bg-slate-200 mx-0.5" />
        <Btn title="Clear formatting" onClick={() => exec('removeFormat')}><RemoveFormatting className="w-3.5 h-3.5" /></Btn>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-placeholder={placeholder || 'Write here…'}
        className="rte-content px-3 py-2 text-xs text-slate-800 leading-relaxed focus:outline-none [&_h2]:text-base [&_h2]:font-bold [&_h3]:text-sm [&_h3]:font-bold [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-purple-700 [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-purple-300 [&_blockquote]:pl-3 [&_blockquote]:text-slate-500"
        style={{ minHeight }}
      />
    </div>
  );
}
