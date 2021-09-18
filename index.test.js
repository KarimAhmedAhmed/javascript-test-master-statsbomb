import { List } from './index.js'


describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] })
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] })
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items

    expect(actual).toEqual(expected)
  })


  it('should insert b into sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into the start of list a', () => {
    const list = List({ initial: [1, 3, 4, 5], initialOrder: true })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(2).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into the middle of list a', () => {
    const list = List({ initial: [1, 2, 3, 5, 6], initialOrder: true })
    const expected = [1, 2, 3, 4, 5, 6];
    const actual = list.insert(4).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into the end of list a', () => {
    const list = List({ initial: [1, 2, 3, 4, 5, 6, 8], initialOrder: true })
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = list.insert(7).items

    expect(actual).toEqual(expected)
  })

  it('should insert b into unsorted list a', () => {
    const list = List({ initial: [3, 1, 4, 2], initialOrder: false })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from sorted list a', () => {
    const list = List({ initial: [-300, -100, 9, 10, 200], initialOrder: true })
    const expected = [-100, 9, 10, 200];
    const actual = list.remove(-300).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from the start of sorted list a ', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [2, 3, 4];
    const actual = list.remove(1).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from the middle of sorted list a ', () => {
    const list = List({ initial: [1, 2, 3, 4, 5], initialOrder: true })
    const expected = [1, 2, 4, 5];
    const actual = list.remove(3).items

    expect(actual).toEqual(expected)
  })

  it('should remove b from unsorted list a', () => {
    const list = List({ initial: [3, 1, 4, 2], initialOrder: false })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = 2;
    const actual = list.findIndex(3)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at sorted list a', () => {
    const list = List({ initial: [-300, -100, 9, 10, 200], initialOrder: true })
    const expected = 1;
    const actual = list.findIndex(-100)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at the start of sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4, 5], initialOrder: true })
    const expected = 0;
    const actual = list.findIndex(1)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at the middle of sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4, 5], initialOrder: true })
    const expected = 2;
    const actual = list.findIndex(3)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at the end of sorted list a', () => {
    const list = List({ initial: [1, 2, 3, 4, 5], initialOrder: true })
    const expected = 4;
    const actual = list.findIndex(5)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at unsorted list a', () => {
    const list = List({ initial: [3, 1, 4, 2], initialOrder: false })
    const expected = 2;
    const actual = list.findIndex(3)

    expect(actual).toEqual(expected)
  })

  it('should findIndex of b at unsorted list a', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300], initialOrder: false })
    const expected = 0;
    const actual = list.findIndex(-300)

    expect(actual).toEqual(expected)
  })

})