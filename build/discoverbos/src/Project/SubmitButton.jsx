const ownerId = "discover.near";
const validateForm = props.validateForm;
const data = props.data;
const did = props.did;

return (
  <Widget
    src={`${ownerId}/widget/Buttons.Green`}
    props={{
      disabled: !validateForm,
      onClick: () => {
        if (!validateForm) return;
        Social.set({
          thing: {
            [did]: {
              "": JSON.stringify(data),
              metadata: {
                name: data.name,
                description: data.description,
              },
            },
          },
          index: {
            every: JSON.stringify({
              key: "group",
              value: {
                id: did,
              },
            }),
            notify: JSON.stringify({
              key: "discover.near",
              value: {
                type: "request",
                data: {
                  type: "featured",
                  src: `${context.accountId}/thing/${did}`,
                },
              },
            }),
          },
        });
      },
      text: (
        <>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.875 16.5V12.75M2.875 5.25V1.5M1 3.375H4.75M1 14.625H4.75M9.25 2.25L7.94937 5.63165C7.73786 6.18157 7.6321 6.45653 7.46765 6.68781C7.32189 6.8928 7.1428 7.07189 6.93781 7.21765C6.70653 7.3821 6.43157 7.48786 5.88165 7.69937L2.5 9L5.88165 10.3006C6.43157 10.5121 6.70653 10.6179 6.93781 10.7824C7.1428 10.9281 7.32189 11.1072 7.46765 11.3122C7.6321 11.5435 7.73786 11.8184 7.94937 12.3684L9.25 15.75L10.5506 12.3684C10.7621 11.8184 10.8679 11.5435 11.0324 11.3122C11.1781 11.1072 11.3572 10.9281 11.5622 10.7824C11.7935 10.6179 12.0684 10.5121 12.6184 10.3006L16 9L12.6184 7.69937C12.0684 7.48786 11.7935 7.3821 11.5622 7.21765C11.3572 7.07189 11.1781 6.8928 11.0324 6.68781C10.8679 6.45653 10.7621 6.18157 10.5506 5.63165L9.25 2.25Z"
              stroke="#11181C"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create project
        </>
      ),
    }}
  />
);
