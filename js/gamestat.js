        document.querySelectorAll('.openTabLink').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const tabId = this.getAttribute('data-tab');
                const table = document.getElementById(tabId);
                if (table.classList.contains('hidden')) {
                    table.classList.remove('hidden');
                    table.classList.add('visible');
                } else {
                    table.classList.remove('visible');
                    table.classList.add('hidden');
                }
            });
        });