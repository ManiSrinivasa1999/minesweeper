(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const difficultylevel = document.getElementsByClassName(
          'levels') as HTMLCollectionOf<HTMLUListElement>;
      const model = {
        diffLevel: 0,
      };
      const startView = {
        render: (): void => {
        },
        init: (): void => {
          const playNow = document.getElementById('playnow') as HTMLAnchorElement;
          playNow.onclick = controller.playNow;
        },
      };
      const difficultyView = {
        render: (): void => {
        },
        init: (): void => {
          const playbutton = document.getElementById(
              'playbutton') as HTMLButtonElement;
          playbutton.onclick = controller.handlePlayButton;
        },
      };
      const gameView = {
        render: (): void => {
        },
        init: (): void => {
        },
      };
      const scoreView = {
        render: (): void => {
        },
        init: (): void => {
        },
      };
      const endView = {

      };
      const controller = {
        playNow: (): void => {
          const startView = document.getElementById('startView') as HTMLDivElement;
          const difficultyView = document.getElementById('difficultyView') as HTMLDivElement;
          startView.classList.add('hide');
          difficultyView.classList.remove('hide');
        },
        handlePlayButton: (): void => {
          const difficultyView = document.getElementById(
              'difficultyView') as HTMLDivElement;
          const gameView = document.getElementById(
              'gameView') as HTMLDivElement;
          difficultyView.classList.add('gridshide');
          gameView.classList.remove('gridshide');
          const radioButton = document.querySelector(
              'input[name="level"]:checked') as HTMLInputElement;
          model.diffLevel = Number(radioButton.value);
          // console.log(model.diffLevel);
          const displaygrids = document.getElementById(
              'displaygrids') as HTMLDivElement;
          // console.log(displaygrids);
          let grids = '<table class="grids">';
          for (let i = 0; i < model.diffLevel; i += 1) {
            grids += '<tr>';
            for (let i = 0; i < model.diffLevel; i += 1) {
              grids += '<td>';
              // grids += 1;
              grids += '</td>';
            }
            grids += '</tr>';
          }
          grids += '</table>';
          displaygrids.innerHTML = grids;
        },
        init: (): void => {
          gameView.init();
          difficultyView.init();
          startView.init();
        },
      };
      controller.init();
    }
  }
)();
