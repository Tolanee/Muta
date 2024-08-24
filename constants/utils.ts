import { z, optional } from "zod";
import store from "./store";

export const FormSchema = (type: string) => {
	z.object({
		email: z.string().email(),
		password: z.string().min(8),
		firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
		lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
	});
};

export const isLoggedIn = () => {
	const token = store.getState().token;
	return token !== null && token !== undefined;
};
