import { setElement } from "./addElement";
/**
 * Observer Pattern DEMO
 * ------------------------
 * Article:
 */
const subject = () => {
  return {};
};

const observer = () => {
  return {};
};


const observerPattern = {
  isObserverSubscribedToSubject: false,
  subjectItem: null,
  subjectRandomizer: null,
  subjectSubscriber: null,
  subjectSpan: null,
  observer: {
    name: 'NumberObserver',
    isObserving: false,
    span: null,
    commit(event) {
      this.span.innerHTML = event.detail.number;
    }
  },
  onShuffle: null,
  observerItem: null,
  observerSubscriber: null,
  observerSpan: null,
  onSubscribe: null,
  onRandomize: null,
  demo(listParentElement) {
    this.subjectItem  = setElement(listParentElement, 'li');
    this.subjectRandomizer = setElement(this.subjectItem, 'button');
    this.subjectRandomizer.innerHTML = 'Shuffle number';
    this.subjectSpan = setElement(this.subjectItem, 'span');
    this.onShuffle = () => {
      this.subjectSpan.innerHTML = Math.floor(Math.random() * Math.floor(99));
      const event = new CustomEvent('randomize', { detail: {
          number: this.subjectSpan.innerHTML
        } });
      if (this.subjectSubscriber) this.subjectSubscriber.commit(event);
    };
    this.subjectRandomizer.addEventListener('click', this.onShuffle);
    this.subjectSpan.innerHTML = 0;
    this.onShuffle = () => {

    },
    this.observerItem = setElement(listParentElement, 'div');
    this.observerSubscriber = setElement(this.observerItem, 'button');
    this.observer.span = setElement(this.observerItem, 'span');
    this.observerSubscriber.innerHTML = 'Subscribe';

    this.onSubscribe = () => {
      this.isObserverSubscribedToSubject = !this.isObserverSubscribedToSubject;
      this.observerSubscriber.innerHTML = this.isObserverSubscribedToSubject ? 'Unsubscribe' : 'Subscribe';
      this.observer.isObserving = this.isObserverSubscribedToSubject;
      this.subjectSubscriber = this.isObserverSubscribedToSubject ? this.observer : null;
    },
    this.observerSubscriber.addEventListener('click', this.onSubscribe);
    this.onRandomize = (event) => {
      this.observerSpan.innerHTML = event.detail.number;
    };
  }
};

export default observerPattern;
