import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const EmployeeScalarFieldEnumSchema = z.enum(['id','cedula','name','patron','business_name','tel1','tel2','salary','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EMPLOYEE SCHEMA
/////////////////////////////////////////

export const EmployeeSchema = z.object({
  id: z.number().int(),
  cedula: z.string(),
  name: z.string(),
  patron: z.string(),
  business_name: z.string(),
  tel1: z.string(),
  tel2: z.string(),
  salary: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Employee = z.infer<typeof EmployeeSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EMPLOYEE
//------------------------------------------------------

export const EmployeeSelectSchema: z.ZodType<Prisma.EmployeeSelect> = z.object({
  id: z.boolean().optional(),
  cedula: z.boolean().optional(),
  name: z.boolean().optional(),
  patron: z.boolean().optional(),
  business_name: z.boolean().optional(),
  tel1: z.boolean().optional(),
  tel2: z.boolean().optional(),
  salary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const EmployeeWhereInputSchema: z.ZodType<Prisma.EmployeeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EmployeeWhereInputSchema),z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeWhereInputSchema),z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cedula: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  patron: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tel1: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tel2: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  salary: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const EmployeeOrderByWithRelationInputSchema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cedula: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  patron: z.lazy(() => SortOrderSchema).optional(),
  business_name: z.lazy(() => SortOrderSchema).optional(),
  tel1: z.lazy(() => SortOrderSchema).optional(),
  tel2: z.lazy(() => SortOrderSchema).optional(),
  salary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EmployeeWhereUniqueInputSchema: z.ZodType<Prisma.EmployeeWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    cedula: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
    cedula: z.string(),
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    cedula: z.string(),
    name: z.string(),
  }),
  z.object({
    cedula: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  cedula: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => EmployeeWhereInputSchema),z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeWhereInputSchema),z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  patron: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tel1: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tel2: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  salary: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const EmployeeOrderByWithAggregationInputSchema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cedula: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  patron: z.lazy(() => SortOrderSchema).optional(),
  business_name: z.lazy(() => SortOrderSchema).optional(),
  tel1: z.lazy(() => SortOrderSchema).optional(),
  tel2: z.lazy(() => SortOrderSchema).optional(),
  salary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EmployeeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EmployeeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EmployeeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EmployeeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EmployeeSumOrderByAggregateInputSchema).optional()
}).strict();

export const EmployeeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema),z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema),z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  cedula: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  patron: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  business_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tel1: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tel2: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  salary: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const EmployeeCreateInputSchema: z.ZodType<Prisma.EmployeeCreateInput> = z.object({
  cedula: z.string(),
  name: z.string(),
  patron: z.string(),
  business_name: z.string(),
  tel1: z.string(),
  tel2: z.string(),
  salary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const EmployeeUncheckedCreateInputSchema: z.ZodType<Prisma.EmployeeUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  cedula: z.string(),
  name: z.string(),
  patron: z.string(),
  business_name: z.string(),
  tel1: z.string(),
  tel2: z.string(),
  salary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const EmployeeUpdateInputSchema: z.ZodType<Prisma.EmployeeUpdateInput> = z.object({
  cedula: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  patron: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  salary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EmployeeUncheckedUpdateInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cedula: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  patron: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  salary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EmployeeCreateManyInputSchema: z.ZodType<Prisma.EmployeeCreateManyInput> = z.object({
  id: z.number().int().optional(),
  cedula: z.string(),
  name: z.string(),
  patron: z.string(),
  business_name: z.string(),
  tel1: z.string(),
  tel2: z.string(),
  salary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const EmployeeUpdateManyMutationInputSchema: z.ZodType<Prisma.EmployeeUpdateManyMutationInput> = z.object({
  cedula: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  patron: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  salary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EmployeeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cedula: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  patron: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel1: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tel2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  salary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const EmployeeCountOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cedula: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  patron: z.lazy(() => SortOrderSchema).optional(),
  business_name: z.lazy(() => SortOrderSchema).optional(),
  tel1: z.lazy(() => SortOrderSchema).optional(),
  tel2: z.lazy(() => SortOrderSchema).optional(),
  salary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EmployeeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EmployeeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cedula: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  patron: z.lazy(() => SortOrderSchema).optional(),
  business_name: z.lazy(() => SortOrderSchema).optional(),
  tel1: z.lazy(() => SortOrderSchema).optional(),
  tel2: z.lazy(() => SortOrderSchema).optional(),
  salary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EmployeeMinOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  cedula: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  patron: z.lazy(() => SortOrderSchema).optional(),
  business_name: z.lazy(() => SortOrderSchema).optional(),
  tel1: z.lazy(() => SortOrderSchema).optional(),
  tel2: z.lazy(() => SortOrderSchema).optional(),
  salary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EmployeeSumOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const EmployeeFindFirstArgsSchema: z.ZodType<Prisma.EmployeeFindFirstArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereInputSchema.optional(),
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(),EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema,EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const EmployeeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EmployeeFindFirstOrThrowArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereInputSchema.optional(),
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(),EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema,EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const EmployeeFindManyArgsSchema: z.ZodType<Prisma.EmployeeFindManyArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereInputSchema.optional(),
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(),EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema,EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const EmployeeAggregateArgsSchema: z.ZodType<Prisma.EmployeeAggregateArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(),
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(),EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const EmployeeGroupByArgsSchema: z.ZodType<Prisma.EmployeeGroupByArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(),
  orderBy: z.union([ EmployeeOrderByWithAggregationInputSchema.array(),EmployeeOrderByWithAggregationInputSchema ]).optional(),
  by: EmployeeScalarFieldEnumSchema.array(),
  having: EmployeeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const EmployeeFindUniqueArgsSchema: z.ZodType<Prisma.EmployeeFindUniqueArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereUniqueInputSchema,
}).strict()

export const EmployeeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EmployeeFindUniqueOrThrowArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereUniqueInputSchema,
}).strict()

export const EmployeeCreateArgsSchema: z.ZodType<Prisma.EmployeeCreateArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  data: z.union([ EmployeeCreateInputSchema,EmployeeUncheckedCreateInputSchema ]),
}).strict()

export const EmployeeUpsertArgsSchema: z.ZodType<Prisma.EmployeeUpsertArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereUniqueInputSchema,
  create: z.union([ EmployeeCreateInputSchema,EmployeeUncheckedCreateInputSchema ]),
  update: z.union([ EmployeeUpdateInputSchema,EmployeeUncheckedUpdateInputSchema ]),
}).strict()

export const EmployeeCreateManyArgsSchema: z.ZodType<Prisma.EmployeeCreateManyArgs> = z.object({
  data: z.union([ EmployeeCreateManyInputSchema,EmployeeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const EmployeeDeleteArgsSchema: z.ZodType<Prisma.EmployeeDeleteArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  where: EmployeeWhereUniqueInputSchema,
}).strict()

export const EmployeeUpdateArgsSchema: z.ZodType<Prisma.EmployeeUpdateArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  data: z.union([ EmployeeUpdateInputSchema,EmployeeUncheckedUpdateInputSchema ]),
  where: EmployeeWhereUniqueInputSchema,
}).strict()

export const EmployeeUpdateManyArgsSchema: z.ZodType<Prisma.EmployeeUpdateManyArgs> = z.object({
  data: z.union([ EmployeeUpdateManyMutationInputSchema,EmployeeUncheckedUpdateManyInputSchema ]),
  where: EmployeeWhereInputSchema.optional(),
}).strict()

export const EmployeeDeleteManyArgsSchema: z.ZodType<Prisma.EmployeeDeleteManyArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(),
}).strict()