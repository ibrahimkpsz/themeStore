ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 500,
    delay: 700,
});

// Main Container

ScrollReveal().reveal("#mainTextBox h1",
    {
        duration: 1000,
        delay: 200,
        origin: "bottom",
    }
);

ScrollReveal().reveal("#mainTextBox p",
    {
        duration: 1000,
        delay: 400,
        origin: "bottom",
    }
);

ScrollReveal().reveal("#mainBtn",
    {
        distance: "0px",
        interval: 200
    }
);

ScrollReveal().reveal("#mainContainer img",
    {
        delay: 900,
        distance: "0px",
    }
);

// Hero Container

ScrollReveal().reveal("#heroSection img",
    {
        duration: 500,
        delay: 200,
        origin: "bottom",
    }
);

ScrollReveal().reveal("#heroTextBox h3",
    {
        duration: 700,
        delay: 400,
        origin: "bottom",
    }
);

ScrollReveal().reveal("#heroTextBox p.mb-4",
    {
        distance: "60px",
        delay: 600,
        duration: 700,
        origin: "left"
    }
);

ScrollReveal().reveal("#heroTextBox .small",
    {
        delay: 900,
        distance: "0px",
    }
);

ScrollReveal().reveal("#heroTextBox p.author",
    {
        delay: 1200,
        distance: "0px",
    }
);

// Card Container

ScrollReveal().reveal("#themesTextBox .themesTitle",
    {
        delay: 300,
        distance: "40px",
        origin: "bottom"
    }
);

ScrollReveal().reveal("#themesTextBox .themesText",
    {
        delay: 400,
        distance: "40px",
        origin: "bottom"
    }
);

ScrollReveal().reveal(".row-cols-lg-4",
    {
        delay: 300,
        distance: "0px",
    }
);

ScrollReveal().reveal("#moreBtn",
    {
        duration: 600,
        delay: 400,
        origin: "bottom",
    }
);

// Get Started Container

ScrollReveal().reveal("#getStartedTextBox .getStartedTitle",
    {
        delay: 400,
        distance: "20px",
    }
);

ScrollReveal().reveal("#getStartedTextBox .getStartedText",
    {
        duration: 600,
        delay: 400,
        origin: "bottom",
    }
);

ScrollReveal().reveal("#getStartedBtn",
    {
        duration: 800,
        delay: 600,
        origin: "bottom",
    }
);