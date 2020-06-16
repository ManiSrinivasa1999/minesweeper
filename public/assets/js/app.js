(document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const difficultylevel = document.getElementsByClassName('levels');
        const model = {
            diffLevel: 0,
        };
        const startView = {
            render: () => {
            },
            init: () => {
                const playNow = document.getElementById('playnow');
                playNow.onclick = controller.playNow;
            },
        };
        const difficultyView = {
            render: () => {
            },
            init: () => {
                const playbutton = document.getElementById('playbutton');
                playbutton.onclick = controller.handlePlayButton;
            },
        };
        const gameView = {
            render: () => {
            },
            init: () => {
            },
        };
        const scoreView = {
            render: () => {
            },
            init: () => {
            },
        };
        const endView = {};
        const controller = {
            playNow: () => {
                const startView = document.getElementById('startView');
                const difficultyView = document.getElementById('difficultyView');
                startView.classList.add('hide');
                difficultyView.classList.remove('hide');
            },
            handlePlayButton: () => {
                const difficultyView = document.getElementById('difficultyView');
                const gameView = document.getElementById('gameView');
                difficultyView.classList.add('gridshide');
                gameView.classList.remove('gridshide');
                const radioButton = document.querySelector('input[name="level"]:checked');
                model.diffLevel = Number(radioButton.value);
                // console.log(model.diffLevel);
                const displaygrids = document.getElementById('displaygrids');
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
            init: () => {
                gameView.init();
                difficultyView.init();
                startView.init();
            },
        };
        controller.init();
    }
})();
