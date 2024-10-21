import React, { ReactNode } from "react"

export type ReactWithProps<P = {}> = React.FC<{ children?: ReactNode } & P>;
