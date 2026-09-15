const RouteLoading = () => {
  return (
    <main className="route-loading" aria-live="polite" aria-busy="true">
      <div className="route-loading-spinner" aria-hidden="true" />
      <p>Loading...</p>
    </main>
  );
};

export default RouteLoading;
