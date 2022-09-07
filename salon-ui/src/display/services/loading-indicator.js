import { Subject } from "rxjs";

const subject = new Subject();
const loadingIndicator = {
    showLoading: value => subject.next({ showLoading: value }),
    onMessage: () => subject.asObservable()

}
export default loadingIndicator;