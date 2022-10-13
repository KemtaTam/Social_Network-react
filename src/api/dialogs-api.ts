import { MessageType } from "../types/dialogs-types";

export type StatusType = "pending" | "ready" | "error";
type EventType = "message-received" | "status-changed";
type MessageReceivedSubscriberType = (message: Array<MessageType>) => void;
type SatusChangedSubscriberType = (status: StatusType) => void;

const subscribers = {
	"message-received": [] as Array<MessageReceivedSubscriberType>,
	"status-changed": [] as Array<SatusChangedSubscriberType>,
};
let ws: WebSocket | null = null;

const closeHandler = () => {
	console.log("CLOSE");
	notifySubscribersAboutStatus("error");
	setTimeout(createWebSocketChannel, 3000);
};
const messageHandler = (e: MessageEvent) => {
	const newMessage = JSON.parse(e.data);
	subscribers["message-received"].forEach((s) => {
		s(newMessage);
	});
};
const openHandler = () => {
	notifySubscribersAboutStatus("ready");
};
const errorHandler = () => {
	notifySubscribersAboutStatus("error");
	console.error("RESTART PAGE");
};

const cleanUp = () => {
	ws?.removeEventListener("close", closeHandler);
	ws?.removeEventListener("message", messageHandler);
	ws?.removeEventListener("open", openHandler);
	ws?.removeEventListener("error", errorHandler);
};

const notifySubscribersAboutStatus = (status: StatusType) => {
	subscribers["status-changed"].forEach((s) => s(status));
};

const createWebSocketChannel = () => {
	cleanUp();
	ws?.close();

	ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
	notifySubscribersAboutStatus("pending");
	ws.addEventListener("close", closeHandler);
	ws.addEventListener("message", messageHandler);
	ws.addEventListener("open", openHandler);
	ws.addEventListener("error", errorHandler);
};

export const dialogsApi = {
	start() {
		createWebSocketChannel();
	},
	stop() {
		subscribers["message-received"] = [];
		subscribers["status-changed"] = [];
		cleanUp();
		ws?.close();
	},
	subscribe(eventName: EventType, callback: MessageReceivedSubscriberType | SatusChangedSubscriberType) {
		// @ts-ignore
		subscribers[eventName].push(callback);
	},
	unsubscribe(eventName: EventType, callback: MessageReceivedSubscriberType | SatusChangedSubscriberType) {
		// @ts-ignore
		subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
	},
	sendMessage(message: string) {
		ws?.send(message);
	},
};
