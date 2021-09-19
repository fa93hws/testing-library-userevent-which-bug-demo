/**
 * @jest-environment jsdom
 */
const { default: userEvent } = require('@testing-library/user-event');

describe('foo', () => {
  function generateHTML() {
    const input = document.createElement('input');
    input.id = 'input-id';
    input.addEventListener('keydown', ev => {
      console.log('addEventListener:', {
        keyCode: ev.keyCode,
        which: ev.which,
      });
    });

    document.body.appendChild(input);
  }

  it('bar', () => {
    generateHTML();
    const input = document.getElementById('input-id');
    userEvent.type(input, 'a')
    expect(1).toBe(1);
  })
})