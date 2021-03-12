export class EventEmitter {
    listeners = [];

    subscribe(listener) {
        this.listeners.push(listener);
        return {
            unsubscribe: () => this.unsubscribe(listener)
        };
    }

    unsubscribe(listener) {
        let callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1)
            this.listeners.splice(callbackIndex, 1);
    }

    emit(event) {
        /** Update any general listeners */
        this.listeners.forEach((listener) => listener.call(null, event));
    }
}