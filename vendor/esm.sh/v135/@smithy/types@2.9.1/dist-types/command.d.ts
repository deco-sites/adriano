import { Handler, MiddlewareStack } from "./middleware.d.ts";
import { MetadataBearer } from "./response.d.ts";
/**
 * @public
 */
export interface Command<ClientInput extends object, InputType extends ClientInput, ClientOutput extends MetadataBearer, OutputType extends ClientOutput, ResolvedConfiguration> {
    readonly input: InputType;
    readonly middlewareStack: MiddlewareStack<InputType, OutputType>;
    resolveMiddleware(stack: MiddlewareStack<ClientInput, ClientOutput>, configuration: ResolvedConfiguration, options: any): Handler<InputType, OutputType>;
}
