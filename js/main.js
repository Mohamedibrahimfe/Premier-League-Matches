async function getLiveScores() {
    const response = await fetch('https://livescore-api.com/api-client/matches/live.json?competition_id=2&key=4xPQF2Iag7PXPghe&secret=VzWsBFspNIYH0l15TRVyUDIbLx8AOpOJ');
    const data = await response.json();
    const matches = data.data.match;

    const matchesContainer = document.getElementById('matchesContainer');
    matchesContainer.innerHTML = '';

    matches.forEach(match => {
        console.log(match);
        const matchCard = document.createElement('div');
        matchCard.className = 'match';

        matchCard.innerHTML = `
            <div class="match-header">
                <div class="match-status">${match.status}</div>
                <div class="match-tournament"><img src="https://assets.codepen.io/285131/pl-logo.svg" />${match.competition.name}</div>
            </div>
            <div class="match-content">
                <div class="column">
                        <h2 class="team-name">${match.home.name}</h2>
                </div>
                <div class="column">
                    <div class="match-details">
                        <div class="match-date">
                            ${match.time}
                        </div>
                        <div class="match-score">
                            <span class="match-score-number match-score-number--leading">${match.scores.score ? match.scores.score.split('-')[0] : 'N/A'}</span>
                            <span class="match-score-divider">:</span>
                            <span class="match-score-number">${match.scores.score? match.scores.score.split('-')[1] : 'N/A'}</span>
                        </div>
                        
                        <div class="match-referee">
                            Stadium: <strong>${match.location}</strong>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="team team--away">
                        <h2 class="team-name">${match.away.name}</h2>
                    </div>
                </div>
            </div>
        `;

        matchesContainer.appendChild(matchCard);
    });
}

getLiveScores();

const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('theme-dark');
});
