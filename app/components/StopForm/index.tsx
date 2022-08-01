import type { ThrownResponse } from '@remix-run/react';
import { Form } from '@remix-run/react';

function StopForm({ error }: { error?: ThrownResponse }) {
  return (
    <div className="p-4 text-center max-w-lg mx-auto">
      <Form action="/stops" method="post">
        <label>
          <p>Stop ID</p>
          <input
            className="p-4 m-4 mx-0 border border-gray-500"
            placeholder="Enter a numeric stop ID"
            required
            name="stopId"
            type="text"
            pattern="[0-9]+"
          />
        </label>
        <button className="p-4 px-8 border border-green-600 bg-green-600 text-white" type="submit">
          Go
        </button>
      </Form>
      {error && <p className="text-red-800 mx-2 bg-red-100 p-3 border border-red-800">{error.data}</p>}
    </div>
  );
}

export default StopForm;
