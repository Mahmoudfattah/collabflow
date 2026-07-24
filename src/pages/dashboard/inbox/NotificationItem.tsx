 import type { Notification } from "./type";



interface NotificationItemProps {
  notification: Notification;
  onRead: (id: string) => void;
}

export default function NotificationItem({
  notification,
  onRead,
}: NotificationItemProps) {
    
  const Icon = notification.icon;

  return (
    <li className="rounded-lg border border-zinc-800 bg-[#1E2028] p-5">
      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${notification.bg}`}>
            <Icon
              size={18}
              className={notification.color}
            />
          </div>

          <img
            src={notification.avatar}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />

          <div>

            <p className="text-sm font-medium text-white">

              {notification.title}{" "}

              <span className="text-indigo-400">
                {notification.highlight}
              </span>

            </p>

         

            <p className="mt-2 text-xs text-zinc-500">
              {notification.time}
            </p>

          </div>
        </div>

        {notification.unread && (
          <div className="flex flex-row items-center justify-center gap-2">
          <div className="h-2 w-2 mt-1 rounded-full bg-indigo-500" />
             <button
              onClick={() => onRead(notification.id)}
              className="mt-1 text-xs text-indigo-400 hover:text-indigo-300"
            >
              Mark as read
            </button>
          </div>
          
        )}

      </div>
    </li>
  );
}