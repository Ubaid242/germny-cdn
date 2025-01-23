<script>
 document.addEventListener('click', function(event) {
            const menu = document.querySelector('.navbar-collapse');
            const burger = document.querySelector('.navbar-toggler');
            if (!menu.contains(event.target) && !burger.contains(event.target)) {
                menu.classList.remove('show');
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
   
    const hoverLinks = document.querySelectorAll('.hover-target');

  
    hoverLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
           
            const targetId = this.getAttribute('data-target');

         
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = 'none';
            });

 
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
});


const btns = document.querySelectorAll(".acc-btn"); 

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open with maxHeight of 800px
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = "800px"; // Set to 800px when opening
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));


    // Function to open a modal by ID
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Function to close a modal by ID
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Close the modal if the user clicks outside the modal content
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.custom-modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };



  // Function to display popup
  // Function to show the popup
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to hide the popup
function hidePopup(popupId, event) {
    event.preventDefault(); // Prevent default behavior
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Attach event listener to the button
document.getElementById('Manuela').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    showPopup('popupManuela');
});

// Close popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popupManuela');
    if (popup && event.target === popup) {
        popup.style.display = 'none';
    }
});


    
</script>
<script>
  // Lazy load CSS
  function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  // Lazy load JS
  function loadJS(src) {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  }

  // Load CSS files
  loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
  loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");

  // Load JS files
  loadJS("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js");
  loadJS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js");
</script>

<script>

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
document.addEventListener("DOMContentLoaded", (function() {
    const o = document.querySelectorAll(".lazy");
    if ("IntersectionObserver" in window) {
        const e = new IntersectionObserver(((o, e) => {
            o.forEach((o => {
                if (o.isIntersecting) {
                    const t = o.target;
                    t.src = t.dataset.src, t.classList.add("loaded"), e.unobserve(t)
                }
            }))
        }));
        o.forEach((o => {
            e.observe(o)
        }))
    } else o.forEach((o => {
        o.src = o.dataset.src, o.classList.add("loaded")
    }))
})), window.onscroll = function() {
    const o = document.getElementById("scrollToTopBtn");
    document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ? o.style.display = "block" : o.style.display = "none"
};
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("lazy-video");

    // Create an intersection observer to detect when the video is in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video is in the viewport, load it
                const videoElement = entry.target;
                videoElement.src = videoElement.getAttribute('data-src'); // Set the video source
                videoElement.load(); // Load the video
                videoElement.play(); // Start playing the video
                
                // Stop observing after the video starts loading
                observer.unobserve(videoElement);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is in the viewport

    // Start observing the video element
    observer.observe(video);
});
const iframes = document.querySelectorAll('iframe[data-src]');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        iframe.src = iframe.getAttribute('data-src'); // Lazy load the iframe
        observer.unobserve(iframe); // Stop observing this iframe
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the iframe is visible

  iframes.forEach(iframe => observer.observe(iframe));
</script>