import React, { FC } from "react";
import { NotificationText } from "../interfaces/NotificationText";

const Notification: FC<NotificationText> = (props) => {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title text-justify h4">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Notification;