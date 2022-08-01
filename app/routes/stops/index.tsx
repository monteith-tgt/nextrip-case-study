import { Form, useActionData } from '@remix-run/react';

const IndexRoute = () => {
  const actionData = useActionData();
  return (
    <Form action="/stops" method="post">
      {actionData?.errors.stopId ? <p>{actionData.errors.name}</p> : null}
      <input type="text" name="stopId" defaultValue={actionData?.values.stopId} />
      <button type="submit">Go</button>
    </Form>
  );
};

export default IndexRoute;
