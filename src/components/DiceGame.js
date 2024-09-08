import React, { useState } from 'react';

const DiceGame = () => {
  const [dice, setDice] = useState([1, 1]);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [wins, setWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);

  const rollDice = () => {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newDice);

    const sum = newDice[0] + newDice[1];

    if (sum === 7 || sum === 11) {
      setMessage('Você ganhou!');
      setMessageColor('green');
      setWins(wins + 1);
    } else {
      setMessage('Você perdeu!');
      setMessageColor('red');
    }

    setTotalGames(totalGames + 1);
  };

  const winPercentage = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(2) : 0;

  const diceImages = (diceNumber) => {
    return `https://cdn.jsdelivr.net/gh/DiegoSalazar/dice-images/dice${diceNumber}.png`; 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Dados</h1>
      <div>
        {dice[0] ? (
          <img
            src={diceImages(dice[0])}
            alt={`Dado ${dice[0]}`}
            style={{ width: '100px', height: '100px' }}
          />
        ) : (
          <p>{dice[0]}</p>
        )}
        {dice[1] ? (
          <img
            src={diceImages(dice[1])}
            alt={`Dado ${dice[1]}`}
            style={{ width: '100px', height: '100px' }}
          />
        ) : (
          <p>{dice[1]}</p>
        )}
      </div>
      <button
        onClick={rollDice}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Jogar Dados
      </button>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: messageColor }}>{message}</h3>
        <p>
          Vitórias: {wins} / Jogadas Totais: {totalGames} ={' '}
          {winPercentage}%
        </p>
      </div>
    </div>
  );
};

export default DiceGame;
