import { NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';
// eslint-disable-next-line react/function-component-definition
export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children || label}</MenuLink>
    </NextLink>
  );
}
// eslint-disable-next-line react/function-component-definition
export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children || label}</A>
    </NextLink>
  );
}
