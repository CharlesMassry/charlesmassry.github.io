export const SITE = {
  title: 'Charlie Massry',
  author: 'Charlie Massry',
  description: 'Charlie Massry - a Software Engineer.',
  twitter: 'CharlesMassry',
  github: 'CharlesMassry',
};

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
  });
}

// Plain-text excerpt of a Markdown body, for the post list and meta descriptions.
export function excerpt(markdown: string | undefined, length = 140) {
  const text = (markdown ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s*#+\s*/gm, '')
    .replace(/[*_>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/(\w)'(\w)/g, '$1\u2019$2');
  if (text.length <= length) return text;
  return text.slice(0, text.lastIndexOf(' ', length)).replace(/[,;:.]+$/, '') + '…';
}
