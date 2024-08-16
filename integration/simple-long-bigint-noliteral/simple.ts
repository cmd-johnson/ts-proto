// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: simple.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "./google/protobuf/timestamp";
import { UInt64Value } from "./google/protobuf/wrappers";

export const protobufPackage = "simple";

export interface Numbers {
  double: number;
  float: number;
  int32: number;
  int64: bigint;
  uint32: number;
  uint64: bigint;
  sint32: number;
  sint64: bigint;
  fixed32: number;
  fixed64: bigint;
  sfixed32: number;
  sfixed64: bigint;
  guint64: bigint | undefined;
  timestamp: Date | undefined;
  uint64s: bigint[];
}

function createBaseNumbers(): Numbers {
  return {
    double: 0,
    float: 0,
    int32: 0,
    int64: BigInt("0"),
    uint32: 0,
    uint64: BigInt("0"),
    sint32: 0,
    sint64: BigInt("0"),
    fixed32: 0,
    fixed64: BigInt("0"),
    sfixed32: 0,
    sfixed64: BigInt("0"),
    guint64: undefined,
    timestamp: undefined,
    uint64s: [],
  };
}

export const Numbers = {
  encode(message: Numbers, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.double !== 0) {
      writer.uint32(9).double(message.double);
    }
    if (message.float !== 0) {
      writer.uint32(21).float(message.float);
    }
    if (message.int32 !== 0) {
      writer.uint32(24).int32(message.int32);
    }
    if (message.int64 !== BigInt("0")) {
      if (BigInt.asIntN(64, message.int64) !== message.int64) {
        throw new globalThis.Error("value provided for field message.int64 of type int64 too large");
      }
      writer.uint32(32).int64(message.int64);
    }
    if (message.uint32 !== 0) {
      writer.uint32(40).uint32(message.uint32);
    }
    if (message.uint64 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.uint64) !== message.uint64) {
        throw new globalThis.Error("value provided for field message.uint64 of type uint64 too large");
      }
      writer.uint32(48).uint64(message.uint64);
    }
    if (message.sint32 !== 0) {
      writer.uint32(56).sint32(message.sint32);
    }
    if (message.sint64 !== BigInt("0")) {
      if (BigInt.asIntN(64, message.sint64) !== message.sint64) {
        throw new globalThis.Error("value provided for field message.sint64 of type sint64 too large");
      }
      writer.uint32(64).sint64(message.sint64);
    }
    if (message.fixed32 !== 0) {
      writer.uint32(77).fixed32(message.fixed32);
    }
    if (message.fixed64 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.fixed64) !== message.fixed64) {
        throw new globalThis.Error("value provided for field message.fixed64 of type fixed64 too large");
      }
      writer.uint32(81).fixed64(message.fixed64);
    }
    if (message.sfixed32 !== 0) {
      writer.uint32(93).sfixed32(message.sfixed32);
    }
    if (message.sfixed64 !== BigInt("0")) {
      if (BigInt.asIntN(64, message.sfixed64) !== message.sfixed64) {
        throw new globalThis.Error("value provided for field message.sfixed64 of type sfixed64 too large");
      }
      writer.uint32(97).sfixed64(message.sfixed64);
    }
    if (message.guint64 !== undefined) {
      UInt64Value.encode({ value: message.guint64! }, writer.uint32(106).fork()).join();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(114).fork()).join();
    }
    writer.uint32(122).fork();
    for (const v of message.uint64s) {
      if (BigInt.asUintN(64, v) !== v) {
        throw new globalThis.Error("a value provided in array field uint64s of type uint64 is too large");
      }
      writer.uint64(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Numbers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumbers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.double = reader.double();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.float = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.int32 = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.int64 = reader.int64() as bigint;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.uint32 = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.uint64 = reader.uint64() as bigint;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.sint32 = reader.sint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.sint64 = reader.sint64() as bigint;
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.fixed32 = reader.fixed32();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.fixed64 = reader.fixed64() as bigint;
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.sfixed32 = reader.sfixed32();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.sfixed64 = reader.sfixed64() as bigint;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.guint64 = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag === 120) {
            message.uint64s.push(reader.uint64() as bigint);

            continue;
          }

          if (tag === 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uint64s.push(reader.uint64() as bigint);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Numbers {
    return {
      double: isSet(object.double) ? globalThis.Number(object.double) : 0,
      float: isSet(object.float) ? globalThis.Number(object.float) : 0,
      int32: isSet(object.int32) ? globalThis.Number(object.int32) : 0,
      int64: isSet(object.int64) ? BigInt(object.int64) : BigInt("0"),
      uint32: isSet(object.uint32) ? globalThis.Number(object.uint32) : 0,
      uint64: isSet(object.uint64) ? BigInt(object.uint64) : BigInt("0"),
      sint32: isSet(object.sint32) ? globalThis.Number(object.sint32) : 0,
      sint64: isSet(object.sint64) ? BigInt(object.sint64) : BigInt("0"),
      fixed32: isSet(object.fixed32) ? globalThis.Number(object.fixed32) : 0,
      fixed64: isSet(object.fixed64) ? BigInt(object.fixed64) : BigInt("0"),
      sfixed32: isSet(object.sfixed32) ? globalThis.Number(object.sfixed32) : 0,
      sfixed64: isSet(object.sfixed64) ? BigInt(object.sfixed64) : BigInt("0"),
      guint64: isSet(object.guint64) ? BigInt(object.guint64) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      uint64s: globalThis.Array.isArray(object?.uint64s) ? object.uint64s.map((e: any) => BigInt(e)) : [],
    };
  },

  toJSON(message: Numbers): unknown {
    const obj: any = {};
    if (message.double !== 0) {
      obj.double = message.double;
    }
    if (message.float !== 0) {
      obj.float = message.float;
    }
    if (message.int32 !== 0) {
      obj.int32 = Math.round(message.int32);
    }
    if (message.int64 !== BigInt("0")) {
      obj.int64 = message.int64.toString();
    }
    if (message.uint32 !== 0) {
      obj.uint32 = Math.round(message.uint32);
    }
    if (message.uint64 !== BigInt("0")) {
      obj.uint64 = message.uint64.toString();
    }
    if (message.sint32 !== 0) {
      obj.sint32 = Math.round(message.sint32);
    }
    if (message.sint64 !== BigInt("0")) {
      obj.sint64 = message.sint64.toString();
    }
    if (message.fixed32 !== 0) {
      obj.fixed32 = Math.round(message.fixed32);
    }
    if (message.fixed64 !== BigInt("0")) {
      obj.fixed64 = message.fixed64.toString();
    }
    if (message.sfixed32 !== 0) {
      obj.sfixed32 = Math.round(message.sfixed32);
    }
    if (message.sfixed64 !== BigInt("0")) {
      obj.sfixed64 = message.sfixed64.toString();
    }
    if (message.guint64 !== undefined) {
      obj.guint64 = message.guint64;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.uint64s?.length) {
      obj.uint64s = message.uint64s.map((e) => e.toString());
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Numbers>, I>>(base?: I): Numbers {
    return Numbers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Numbers>, I>>(object: I): Numbers {
    const message = createBaseNumbers();
    message.double = object.double ?? 0;
    message.float = object.float ?? 0;
    message.int32 = object.int32 ?? 0;
    message.int64 = object.int64 ?? BigInt("0");
    message.uint32 = object.uint32 ?? 0;
    message.uint64 = object.uint64 ?? BigInt("0");
    message.sint32 = object.sint32 ?? 0;
    message.sint64 = object.sint64 ?? BigInt("0");
    message.fixed32 = object.fixed32 ?? 0;
    message.fixed64 = object.fixed64 ?? BigInt("0");
    message.sfixed32 = object.sfixed32 ?? 0;
    message.sfixed64 = object.sfixed64 ?? BigInt("0");
    message.guint64 = object.guint64 ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.uint64s = object.uint64s?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds.toString()) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}