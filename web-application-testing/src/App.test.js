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

