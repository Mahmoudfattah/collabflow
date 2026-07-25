import NotificationItem from "./NotificationItem";
import type { Notification } from "./type";



interface Props {
    title : string,
    notifications : Notification[],
    onRead : (id:string)=> void
}


export default function NotificationGroup({
    title ,
    notifications ,
    onRead 
} : Props ) {


    if (!notifications.length) return null ;

    return  <section className="pt-6">
    
          <h2 className="pb-4 pl-2 text-xs uppercase tracking-wider text-zinc-500">
            {title}
          </h2>
    
          <ul className="space-y-3">
    
            {notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onRead={onRead}
              />
            ))}
    
          </ul>
    
        </section>




    
}