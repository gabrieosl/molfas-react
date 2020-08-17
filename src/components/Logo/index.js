import React, { useMemo } from 'react';
import Link from 'next/link';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Logo({ variant = 1, light = false, height = '100px', ...rest }) {
  const source = useMemo(() => {
    const lightValue = light ? '_light' : '';
    return `/logo${variant}${lightValue}.png`;
  }, [variant, light]);

  return (
    <Link href="/">
      <a className="logo" style={styles} {...rest}>
        <img src={source} alt="logo" style={{ height }} />
      </a>
    </Link>
  );
}

export default Logo;
