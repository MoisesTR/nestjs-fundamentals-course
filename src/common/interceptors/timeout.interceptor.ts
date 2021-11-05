import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
    // return next.handle().pipe(
    //   timeout(3000),
    //   catchError((err) => {
    //     if (err instanceof TimeoutError) {
    //       return throwError(() => new RequestTimeoutException());
    //     }

    //     return throwError(() => new Error(err));
    //   }),
    // );
  }
}
