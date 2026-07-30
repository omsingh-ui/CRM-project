export default function RecentActivity({

  activities = []

}) {

  return (

    <div
      className="
      bg-white
      dark:bg-zinc-900
      rounded-3xl
      shadow
      p-8
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
        text-slate-900
        dark:text-white
      "
      >
        Recent Activity
      </h2>

      {
        activities.length === 0 ? (

          <div
            className="
            text-center
            text-slate-500
            py-8
          "
          >
            No recent activity found.
          </div>

        ) : (

          <div
            className="
            space-y-4
          "
          >

            {

              activities.map((activity) => (

                <div

                  key={activity._id}

                  className="
                  flex
                  gap-4
                  items-start
                  bg-slate-50
                  dark:bg-zinc-800
                  rounded-xl
                  p-4
                "
                >

                  <div
                    className="
                    w-3
                    h-3
                    rounded-full
                    bg-blue-700
                    mt-2
                  "
                  />

                  <div>

                    <p
                      className="
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                    >
                      {activity.action}
                    </p>

                    <p
                      className="
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                    >
                      {activity.description}
                    </p>

                    <p
                      className="
                      text-xs
                      text-slate-400
                      mt-1
                    "
                    >
                      {activity.module}
                    </p>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}