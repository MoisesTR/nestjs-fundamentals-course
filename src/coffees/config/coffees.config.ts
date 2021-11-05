import { registerAs } from '@nestjs/config';

// each namespace configuration exposes a KEY property
export default registerAs('coffees', () => ({
  foo: 'bar',
}));
