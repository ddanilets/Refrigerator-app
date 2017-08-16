import uuid from 'uuid/v4';

class Product {
  constructor(data) {
    this._id = uuid();
    this._name = data.name;
    this._validity = data.validity;
    this._image = data.validity;
  }

  get id() {
    return this._id;
  };

  set id(id) {
    this._id = id;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get validity() {
    return this._validity;
  }

  set validity(value) {
    this._validity = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }
}