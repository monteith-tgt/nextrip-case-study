import type { ThrownResponse } from '@remix-run/react';
import { Form } from '@remix-run/react';

function StopForm({ error }: { error?: ThrownResponse }) {
  return (
    <>
      {error && <p>{error.data}</p>}
      <Form action="/stops" method="post">
        <label>
          Stop ID:
          <input required name="stopId" type="text" pattern="[0-9]+" />
        </label>
        <button type="submit">Go</button>
      </Form>
    </>
  );
}

export default StopForm;
