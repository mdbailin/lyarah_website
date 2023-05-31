import { Link } from './link';

// eslint-disable-next-line react/function-component-definition
export default function Logo() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h2>N Project</h2>
    </Link>
  );
}
