/*-------------------
    CONTENT GRID
-------------------*/
app.querySelector('.content-grid', function (el) {
  const sidebar = {
          chat: {
            active: false,
            minWidth: 80,
            maxWidth: 300
          },
          navigation: {
            active: false,
            minWidth: 80,
            maxWidth: 300
          }
        },
        breakpointWidth = 1366;

  const updateGridPosition = function (contentGrid) {
    if (window.innerWidth > breakpointWidth) {
      const chatWidth = sidebar.chat.active ? sidebar.chat.maxWidth : sidebar.chat.minWidth,
            navigationWidth = sidebar.navigation.active ? sidebar.navigation.maxWidth : sidebar.navigation.minWidth,
            availableWidth = document.body.clientWidth - contentGrid.offsetWidth - chatWidth - navigationWidth,
            offsetX = (availableWidth / 2) + navigationWidth;

      contentGrid.style.transform = `translate(${offsetX}px, 0)`;
    } else {
      contentGrid.style.transform = `translate(0, 0)`;
    }
  };

  const updateGridPositions = function () {
    for (const grid of el) {
      updateGridPosition(grid);
    }
  };

  const setGridTransition = function (grid) {
    grid.style.transition = `transform .4s ease-in-out`;
  };

  const setGridTransitions = function () {
    for (const grid of el) {
      setGridTransition(grid);
    }
  };

  setGridTransitions();
  updateGridPositions();
  window.addEventListener('resize', updateGridPositions);


});
