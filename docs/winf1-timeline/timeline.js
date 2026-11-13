function toggleDetail(btn, targetId) {
      const parent = btn.closest('.step-card');
      const allButtons = parent.querySelectorAll('.detail-toggle-btn');
      const allPanels = parent.querySelectorAll('.detail-panel');

      allButtons.forEach(b => b.classList.remove('active'));
      allPanels.forEach(p => p.classList.remove('show'));

      btn.classList.add('active');
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add('show');
      }
    }

    // Filter Bar Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.step-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        items.forEach(item => {
          if (filter === 'all') {
            item.classList.remove('hidden');
          } else if (filter === 'highlight') {
            const isHighlight = item.dataset.category === 'highlight';
            item.classList.toggle('hidden', !isHighlight);
          } else if (filter === 'architecture') {
            const isArch = item.dataset.category === 'architecture' || item.dataset.category === 'highlight';
            item.classList.toggle('hidden', !isArch);
          }
        });
      });
    });
  
    document.querySelectorAll('.detail-toggle-btn[data-target]').forEach(btn => {
      btn.addEventListener('click', () => toggleDetail(btn, btn.dataset.target));
    });
