import { Observable, of, throwError } from 'rxjs';
import { retryWhen, mergeMap, delay } from 'rxjs/operators';

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_DELAY = 2000;

export function retryWithDelayExpo(
  delayMs = DEFAULT_DELAY,
  maxRetry = DEFAULT_MAX_RETRIES
) {
  let retries = maxRetry;

  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) =>
        errors.pipe(
          mergeMap((error) => {
            if (retries-- > 0 && error.status >= 500) {
              const delayTime = delayMs * (maxRetry - retries);
              return of(error).pipe(delay(delayTime));
            }
            return throwError(error);
          })
        )
      )
    );
}
