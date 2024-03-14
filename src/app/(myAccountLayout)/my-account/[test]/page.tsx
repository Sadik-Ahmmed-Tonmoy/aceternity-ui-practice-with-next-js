import React from "react";

type params = {
  test: string;
};

const testPage = ({ params } : { params: params }) => {
  return (
    <div>
      <h1>test</h1>
      {params.test}
    </div>
  );
};

export default testPage;
