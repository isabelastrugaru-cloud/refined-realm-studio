import { siteId, allSiteIds, site } from '@/config/sites';

const DevSiteToggle = () => {
  if (!import.meta.env.DEV) return null;

  const handleSwitch = (id: string) => {
    localStorage.setItem('dev_site', id);
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex items-center gap-1 bg-black/90 text-white rounded-full px-1 py-1 shadow-lg text-xs font-inter select-none">
      {allSiteIds.map(id => (
        <button
          key={id}
          onClick={() => handleSwitch(id)}
          className={`px-3 py-1.5 rounded-full transition-colors capitalize ${
            siteId === id
              ? 'bg-luxury text-black font-semibold'
              : 'hover:bg-white/20'
          }`}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

export default DevSiteToggle;
