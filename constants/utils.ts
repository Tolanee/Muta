import { min, max } from "moment-jalaali";
import { object, string } from "prop-types";
import { z, optional } from "zod";

export const FormSchema=(type: string)=>{
z.object({
		email: z.string().email(),
		password: z.string().min(8),
		firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
		lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
		
	});
}