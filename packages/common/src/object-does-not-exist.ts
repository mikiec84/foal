import { ObjectType } from '@foal/core';

export class ObjectDoesNotExist extends Error {
  public readonly isObjectDoesNotExist = true;

  constructor() {
    super();
    Object.setPrototypeOf(this, ObjectDoesNotExist.prototype);
  }
}

export function isObjectDoesNotExist(err: ObjectType): boolean {
  return err instanceof ObjectDoesNotExist || err.isObjectDoesNotExist === true;
}
