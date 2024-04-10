let show = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let move = {
          root: document.querySelector("#scrollArea"),
          threshold: 0.8,
          opacity: [0, 1],
          translate: ['0px -50px', 0],
        };
        entry.target.animate(move, 2000);
        show_robot.unobserve(entry.target);
      }
    });
  };

  const show_robot = new IntersectionObserver(show, {
    threshold: 0.8
  });

  for (let number = 0; number < 6; number++) {
    show_robot.observe(document.querySelector(".item" + String(number)));
  }