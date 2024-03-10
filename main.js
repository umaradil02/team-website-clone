
        document.addEventListener('DOMContentLoaded', function () {
            var timelineItems = document.querySelectorAll('.timeline-item');

            function isInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function animateItems() {
                timelineItems.forEach(function (item) {
                    if (isInViewport(item)) {
                        item.classList.add('animate');
                    }
                });
            }

            animateItems();

            window.addEventListener('scroll', function () {
                animateItems();
            });
        });
