import React, { useState, useMemo } from 'react';

const DEFAULT_FALLBACK_SRC = process.env.PUBLIC_URL + '/logo192.png';

function FallbackImage({ src, alt, fallbackSrc, onError, loading = 'lazy', decoding = 'async', ...restProps }) {
  const resolvedFallback = useMemo(() => fallbackSrc || DEFAULT_FALLBACK_SRC, [fallbackSrc]);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  const handleError = (event) => {
    if (!hasErrored) {
      setHasErrored(true);
      setCurrentSrc(resolvedFallback);
    }
    if (onError) onError(event);
  };

  return (
    <img src={currentSrc} alt={alt} onError={handleError} loading={loading} decoding={decoding} {...restProps} />
  );
}

export default FallbackImage;


