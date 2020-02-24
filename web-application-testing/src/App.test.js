import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup)

test('Check that strikes wont go over 3', () => {
  const wrapper = rtl.render(<App />)
  const strikeCount = wrapper.getByTestId("strikes")
  const strikes = wrapper.getByTestId("strikes-fn")

  expect(strikeCount.textContent).toBe("0")

  rtl.fireEvent.click(strikes)
  expect(strikeCount.textContent).toBe("1")

  rtl.fireEvent.click(strikes)
  expect(strikeCount.textContent).toBe("2")

  rtl.fireEvent.click(strikes)
  expect(strikeCount.textContent).toBe("0")
})

test('Check that balls wont go over 3', () => {
  const wrapper = rtl.render(<App />)
  const ballsCount = wrapper.getByTestId("balls")
  const balls = wrapper.getByTestId("balls-fn")

  expect(ballsCount.textContent).toBe("0")

  rtl.fireEvent.click(balls)
  expect(ballsCount.textContent).toBe("1")

  rtl.fireEvent.click(balls)
  expect(ballsCount.textContent).toBe("2")

  rtl.fireEvent.click(balls)
  expect(ballsCount.textContent).toBe("3")

  rtl.fireEvent.click(balls)
  expect(ballsCount.textContent).toBe("0")
})

test('Check foul functionality and hit', () => {
  const wrapper = rtl.render(<App />)
  const fouls = wrapper.getByTestId("fouls-fn")
  const hit = wrapper.getByTestId("hit-fn")
  const strikesCount = wrapper.getByTestId("strikes")

  expect(strikesCount.textContent).toBe("0")

  rtl.fireEvent.click(fouls)
  expect(strikesCount.textContent).toBe("1")

  rtl.fireEvent.click(fouls)
  expect(strikesCount.textContent).toBe("2")
  
  rtl.fireEvent.click(fouls)
  expect(strikesCount.textContent).toBe("2")

  rtl.fireEvent.click(hit)
  expect(strikesCount.textContent).toBe("0")
})