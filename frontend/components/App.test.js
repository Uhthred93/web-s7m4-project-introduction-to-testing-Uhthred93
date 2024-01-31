import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import i18n from '../i18n/index.json'

function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key, _]) => key.startsWith(`${keyPrefix}_`));
}

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByText(i18n.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible();
    });

    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByPlaceholderText(i18n.en.PLACEHOLDER_USERNAME)).toBeVisible();
    });

    test(`TEXT_FAV_LANG is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByText(i18n.en.TEXT_FAV_LANG)).toBeVisible();
    });

    test(`LABEL_FAV_FOOD is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByText(i18n.en.LABEL_FAV_FOOD)).toBeVisible();
    });

    test(`LABEL_ACCEPT_TERMS is visible`, () => {
      render(<App lang="en" />);
      expect(screen.getByText(i18n.en.LABEL_ACCEPT_TERMS)).toBeVisible();
    });
  });

  describe('Spanish Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible in Spanish`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(i18n.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    });

    test(`PLACEHOLDER_USERNAME is visible in Spanish`, () => {
      render(<App lang="esp" />);
      expect(screen.getByPlaceholderText(i18n.esp.PLACEHOLDER_USERNAME)).toBeVisible();
    });

    test(`TEXT_FAV_LANG is visible in Spanish`, () => {
      render(<App lang="esp" />);
      expect(screen.getByText(i18n.esp.TEXT_FAV_LANG)).toBeVisible();
    });

    test(`LABEL_FAV_FOOD is visible in Spanish`, () => {
      render(<App lang="esp" />);
      expect(screen.getByText(i18n.esp.LABEL_FAV_FOOD)).toBeVisible();
    });

    test(`LABEL_ACCEPT_TERMS is visible in Spanish`, () => {
      render(<App lang="esp" />);
      expect(screen.getByText(i18n.esp.LABEL_ACCEPT_TERMS)).toBeVisible();
    });

  })
  describe('getEntriesByKeyPrefix', () => {
    const testObj = {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    };

    test('can extract the correct data with prefix "abc"', () => {
      const result = getEntriesByKeyPrefix(testObj, "abc");
      expect(result).toEqual([["abc_1", "data_abc_1"], ["abc_2", "data_abc_2"], ["abc_3", "data_abc_3"]]);
    });

    test('can extract the correct data with prefix "xyz"', () => {
      const result2 = getEntriesByKeyPrefix(testObj, "xyz");
      expect(result2).toEqual([["xyz_1", "data_xyz_1"]]);
    });

    test('returns empty array for non-existent prefix "foo"', () => {
      const result3 = getEntriesByKeyPrefix(testObj, "foo");
      expect(result3).toEqual([]);
    });
  });
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
});
