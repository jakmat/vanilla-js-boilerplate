import { setElement } from "./addElement";
import { v4 as uuidv4 } from 'uuid';
/**
 * Observer Pattern DEMO
 * ------------------------
 * Article:
 */
const subject = (display) => {
  const instance = {
    display,
    number: 0,
    observers: [],
    attach(observer) {
      this.observers.push(observer);
    },
    detach(observer) {
      this.observers = this.observers.filter(o => o.id !== observer.id);
    },
    notify() {
      this.observers.forEach(o => o.update(this.number))
    },
    randomize() {
      instance.number = Math.floor(Math.random() * Math.floor(99));
      instance.display.innerHTML = instance.number;
      instance.notify();
    }
  };
  return instance;
};

const observer = (name, display, button, subjectToObserve) => {
  const instance = {
    id: uuidv4(),
    name,
    display,
    button,
    subjectToObserve,
    isSubscribed: false,
    currentNumber: null,
    update(number) {
      instance.currentNumber = number;
      instance.display.innerHTML = instance.currentNumber;
    },
    subscribe() {
      instance.isSubscribed = true;
      instance.button.innerHTML = 'Unsubscribe';
      instance.subjectToObserve.attach(this);
    },
    unsubscribe() {
      instance.isSubscribed = false;
      instance.button.innerHTML = 'Subscribe';
      instance.subjectToObserve.detach(this);
    },
    toggleSubscription() {
      if (instance.isSubscribed) instance.unsubscribe();
      else instance.subscribe();
    }
  };
  return instance;
};

const observerPattern = {
  subjectView: null,
  subjectBtn: null,
  subjectDisplay: null,
  observerView: null,
  observerBtn: null,
  observerDisplay: null,
  initializeView(listParentElement) {
    this.subjectView = setElement(listParentElement, 'li');
    this.subjectBtn = setElement(this.subjectView, 'button');
    this.subjectDisplay = setElement(this.subjectView, 'span');
    this.observerView = setElement(listParentElement, 'li');
    this.observerBtn = setElement(this.observerView, 'button');
    this.observerDisplay = setElement(this.observerView, 'span');
  },
  demo(listParentElement) {
    this.initializeView(listParentElement);
    // concrete subject
    const concreteSubject = subject(this.subjectDisplay);
    this.subjectBtn.addEventListener('click', concreteSubject.randomize);
    this.subjectBtn.innerHTML = 'Randomize Number';
    this.subjectDisplay.innerHTML = '--';
    // concrete observer
    const concreteObserver = observer('Tony', this.observerDisplay, this.observerBtn, concreteSubject);
    this.observerBtn.addEventListener('click', concreteObserver.toggleSubscription);
    this.observerBtn.innerHTML = 'Subscribe';
    this.observerDisplay.innerHTML = '--';
  }
};

export default observerPattern;
