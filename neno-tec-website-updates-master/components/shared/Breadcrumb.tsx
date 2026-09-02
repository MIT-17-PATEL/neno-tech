import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { serviceCategories } from '../data/services';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  // Only add service-related breadcrumbs for /services/* routes
  if (pathname.startsWith('/services')) {
    items.push({ label: 'Expertise' });

    const segments = pathname.split('/').filter(Boolean);
    // segments[0] = 'services', segments[1] = category, segments[2] = child

    if (segments.length >= 2) {
      const categorySlug = segments[1];
      const category = serviceCategories.find(c => c.id === categorySlug);
      if (category) {
        items.push({ label: category.title, href: category.href });

        if (segments.length >= 3) {
          const childSlug = segments[2];
          const child = category.children.find(ch => ch.slug === childSlug);
          if (child) {
            items.push({ label: child.title });
          }
        }
      }
    }
  }

  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-6 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1920px] mx-auto">
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && (
                  <ChevronRight size={14} className="text-zinc-600 shrink-0" />
                )}
                {isLast || !item.href ? (
                  <span className={`text-sm font-medium ${isLast ? 'text-white' : 'text-zinc-500'}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
