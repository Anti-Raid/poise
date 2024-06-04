searchState.loadedDescShard("serde_json", 0, "Serde JSON\nRepresents a JSON array.\nRepresents a JSON boolean.\nA structure that deserializes JSON into Rust values.\nContains the error value\nThis type represents all possible errors that can occur …\nRepresents a JSON key/value type.\nRepresents a JSON null value.\nRepresents a JSON number, whether integer or floating …\nRepresents a JSON number, whether integer or floating …\nRepresents a JSON object.\nContains the success value\nAlias for a <code>Result</code> with the error type <code>serde_json::Error</code>.\nA structure for serializing Rust values into JSON.\nIterator that deserializes a stream into multiple JSON …\nRepresents a JSON string.\nRepresents any valid JSON value.\nDeserialize JSON data to a Rust data structure.\nParses a JSON string as bytes. Note that this function …\nParses an enum as an object like <code>{&quot;$KEY&quot;:$VALUE}</code>, where …\nParses a newtype struct as the underlying value.\nParses a <code>null</code> as a None, and any other values as a …\nWhen serializing or deserializing JSON goes wrong.\nDisplay a JSON value as a string.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a slice to <code>Value::Array</code>.\nConvert a <code>Vec</code> to <code>Value::Array</code>.\nReturns the argument unchanged.\nConvert boolean to <code>Value::Bool</code>.\nConvert map (with string keys) to <code>Value::Object</code>.\nConvert <code>String</code> to <code>Value::String</code>.\nConvert <code>()</code> to <code>Value::Null</code>.\nConvert 32-bit floating point number to <code>Value::Number</code>, or …\nConvert 64-bit floating point number to <code>Value::Number</code>, or …\nConvert <code>Number</code> to <code>Value::Number</code>.\nConvert copy-on-write string to <code>Value::String</code>.\nConvert string slice to <code>Value::String</code>.\nCreate a <code>Value::Object</code> by collecting an iterator of …\nCreate a <code>Value::Array</code> by collecting an iterator of array …\nDeserialize an instance of type <code>T</code> from an I/O stream of …\nDeserialize an instance of type <code>T</code> from bytes of JSON text.\nDeserialize an instance of type <code>T</code> from a string of JSON …\nInterpret a <code>serde_json::Value</code> as an instance of type <code>T</code>.\nIndex into a <code>serde_json::Value</code> using the syntax <code>value[0]</code> or\nWrite into a <code>serde_json::Value</code> using the syntax …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a <code>serde_json::Value</code> from a JSON literal.\nA map of String to serde_json::Value.\nSerialize a Rust data structure into JSON data.\nSerialize newtypes without an object wrapper.\nSerialize the given data structure as a String of JSON.\nSerialize the given data structure as a pretty-printed …\nConvert a <code>T</code> into <code>serde_json::Value</code> which is an enum that …\nSerialize the given data structure as a JSON byte vector.\nSerialize the given data structure as a pretty-printed …\nSerialize the given data structure as JSON into the I/O …\nSerialize the given data structure as pretty-printed JSON …\nThe Value enum, a loosely typed way of representing any …\nA structure that deserializes JSON into Rust values.\nJSON input source that reads from a std::io input stream.\nTrait used by the deserializer for iterating over input. …\nJSON input source that reads from a slice of bytes.\nJSON input source that reads from a UTF-8 string.\nIterator that deserializes a stream into multiple JSON …\nReturns the number of bytes so far deserialized into a …\nThe <code>Deserializer::end</code> method should be called after a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDeserialize an instance of type <code>T</code> from an I/O stream of …\nCreates a JSON deserializer from an <code>io::Read</code>.\nDeserialize an instance of type <code>T</code> from bytes of JSON text.\nCreates a JSON deserializer from a <code>&amp;[u8]</code>.\nDeserialize an instance of type <code>T</code> from a string of JSON …\nCreates a JSON deserializer from a <code>&amp;str</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTurn a JSON deserializer into an iterator over values of …\nCreate a JSON deserializer from one of the possible …\nCreate a JSON stream deserializer from one of the possible …\nCreate a JSON input source to read from a std::io input …\nCreate a JSON input source to read from a slice of bytes.\nCreate a JSON input source to read from a UTF-8 string.\nCategorizes the cause of a <code>serde_json::Error</code>.\nThe error was caused by input data that was semantically …\nThe error was caused by prematurely reaching the end of …\nContains the error value\nThis type represents all possible errors that can occur …\nThe error was caused by a failure to read or write bytes …\nContains the success value\nAlias for a <code>Result</code> with the error type <code>serde_json::Error</code>.\nThe error was caused by input that was not syntactically …\nCategorizes the cause of this error.\nOne-based column number at which the error was detected.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe kind reported by the underlying standard library I/O …\nReturns true if this error was caused by input data that …\nReturns true if this error was caused by prematurely …\nReturns true if this error was caused by a failure to read …\nReturns true if this error was caused by input that was not\nOne-based line number at which the error was detected.\nA view into a single entry in a map, which may either be …\nAn owning iterator over a serde_json::Map’s entries.\nAn iterator over a serde_json::Map’s entries.\nA mutable iterator over a serde_json::Map’s entries.\nAn iterator over a serde_json::Map’s keys.\nRepresents a JSON key/value type.\nAn occupied Entry.\nAn occupied Entry. It is part of the <code>Entry</code> enum.\nA vacant Entry.\nA vacant Entry. It is part of the <code>Entry</code> enum.\nAn iterator over a serde_json::Map’s values.\nA mutable iterator over a serde_json::Map’s values.\nProvides in-place mutable access to an occupied entry …\nMoves all elements from other into self, leaving other …\nClears the map, removing all values.\nReturns true if the map contains a value for the specified …\nGets the given key’s corresponding entry in the map for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the value corresponding to the key.\nGets a reference to the value in the entry.\nReturns the key-value pair matching the given key.\nReturns a mutable reference to the value corresponding to …\nGets a mutable reference to the value in the entry.\nInserts a key-value pair into the map.\nSets the value of the entry with the VacantEntry’s key, …\nSets the value of the entry with the <code>OccupiedEntry</code>’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the entry into a mutable reference to its value.\nReturns true if the map contains no elements.\nGets an iterator over the entries of the map.\nGets a mutable iterator over the entries of the map.\nReturns a reference to this entry’s key.\nGets a reference to the key that would be used when …\nGets a reference to the key in the entry.\nGets an iterator over the keys of the map.\nReturns the number of elements in the map.\nMakes a new empty Map.\nEnsures a value is in the entry by inserting the default …\nEnsures a value is in the entry by inserting the result of …\nRemoves a key from the map, returning the value at the key …\nTakes the value of the entry out of the map, and returns …\nRemoves a key from the map, returning the stored key and …\nRetains only the elements specified by the predicate.\nGets an iterator over the values of the map.\nGets an iterator over mutable values of the map.\nMakes a new empty Map with the given initial capacity.\nAn escaped ASCII plane control character (usually escaped …\nAn escaped backspace character (usually escaped as <code>\\b</code>)\nAn escaped carriage return character (usually escaped as <code>\\r</code>…\nRepresents a character escape code in a type-safe manner.\nThis structure compacts a JSON value with no extra …\nAn escaped form feed character (usually escaped as <code>\\f</code>)\nThis trait abstracts away serializing the JSON control …\nAn escaped line feed character (usually escaped as <code>\\n</code>)\nThis structure pretty prints a JSON value to make it human …\nAn escaped quote <code>&quot;</code>\nAn escaped reverse solidus <code>\\</code>\nA structure for serializing Rust values into JSON.\nAn escaped solidus <code>/</code>\nAn escaped tab character (usually escaped as <code>\\t</code>)\nCalled before every array.  Writes a <code>[</code> to the specified …\nCalled before every array value.  Writes a <code>,</code> if needed to …\nCalled before every object.  Writes a <code>{</code> to the specified …\nCalled before every object key.\nCalled before every object value.  A <code>:</code> should be written to\nCalled before each series of <code>write_string_fragment</code> and …\nCalled after every array.  Writes a <code>]</code> to the specified …\nCalled after every array value.\nCalled after every object.  Writes a <code>}</code> to the specified …\nCalled after every object key.  A <code>:</code> should be written to …\nCalled after every object value.\nCalled after each series of <code>write_string_fragment</code> and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwrap the <code>Writer</code> from the <code>Serializer</code>.\nCreates a new JSON serializer.\nConstruct a pretty printer formatter that defaults to …\nCreates a new JSON pretty print serializer.\nSerialize the given data structure as a String of JSON.\nSerialize the given data structure as a pretty-printed …\nSerialize the given data structure as a JSON byte vector.\nSerialize the given data structure as a pretty-printed …\nSerialize the given data structure as JSON into the I/O …\nSerialize the given data structure as pretty-printed JSON …\nCreates a new JSON visitor whose output will be written to …\nConstruct a pretty printer formatter that uses the <code>indent</code> …\nWrites a <code>true</code> or <code>false</code> value to the specified writer.\nWrites the representation of a byte array. Formatters can …\nWrites a character escape code to the specified writer.\nWrites a floating point value like <code>-31.26e+12</code> to the …\nWrites a floating point value like <code>-31.26e+12</code> to the …\nWrites an integer value like <code>-123</code> to the specified writer.\nWrites an integer value like <code>-123</code> to the specified writer.\nWrites an integer value like <code>-123</code> to the specified writer.\nWrites an integer value like <code>-123</code> to the specified writer.\nWrites an integer value like <code>-123</code> to the specified writer.\nWrites a <code>null</code> value to the specified writer.\nWrites a number that has already been rendered to a string.\nWrites a raw JSON fragment that doesn’t need any …\nWrites a string fragment that doesn’t need any escaping …\nWrites an integer value like <code>123</code> to the specified writer.\nWrites an integer value like <code>123</code> to the specified writer.\nWrites an integer value like <code>123</code> to the specified writer.\nWrites an integer value like <code>123</code> to the specified writer.\nWrites an integer value like <code>123</code> to the specified writer.\nRepresents a JSON array.\nRepresents a JSON boolean.\nA type that can be used to index into a <code>serde_json::Value</code>.\nRepresents a JSON null value.\nRepresents a JSON number, whether integer or floating …\nRepresents a JSON number, whether integer or floating …\nRepresents a JSON object.\nSerializer whose output is a <code>Value</code>.\nRepresents a JSON string.\nRepresents any valid JSON value.\nIf the <code>Value</code> is an Array, returns the associated vector. …\nIf the <code>Value</code> is an Array, returns the associated mutable …\nIf the <code>Value</code> is a Boolean, returns the associated bool. …\nIf the <code>Value</code> is a number, represent it as f64 if possible. …\nRepresents the number as f64 if possible. Returns None …\nIf the <code>Value</code> is an integer, represent it as i64 if …\nIf the <code>Number</code> is an integer, represent it as i64 if …\nIf the <code>Value</code> is a Null, returns (). Returns None otherwise.\nIf the <code>Value</code> is a Number, returns the associated <code>Number</code>. …\nIf the <code>Value</code> is an Object, returns the associated Map. …\nIf the <code>Value</code> is an Object, returns the associated mutable …\nIf the <code>Value</code> is a String, returns the associated str. …\nIf the <code>Value</code> is an integer, represent it as u64 if …\nIf the <code>Number</code> is an integer, represent it as u64 if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a finite <code>f64</code> to a <code>Number</code>. Infinite or NaN values …\nInterpret a <code>serde_json::Value</code> as an instance of type <code>T</code>.\nIndex into a JSON array or map. A string index can be used …\nMutably index into a JSON array or map. A string index can …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the <code>Value</code> is an Array. Returns false …\nReturns true if the <code>Value</code> is a Boolean. Returns false …\nReturns true if the <code>Value</code> is a number that can be …\nReturns true if the <code>Number</code> can be represented by f64.\nReturns true if the <code>Value</code> is an integer between <code>i64::MIN</code> …\nReturns true if the <code>Number</code> is an integer between <code>i64::MIN</code> …\nReturns true if the <code>Value</code> is a Null. Returns false …\nReturns true if the <code>Value</code> is a Number. Returns false …\nReturns true if the <code>Value</code> is an Object. Returns false …\nReturns true if the <code>Value</code> is a String. Returns false …\nReturns true if the <code>Value</code> is an integer between zero and …\nReturns true if the <code>Number</code> is an integer between zero and …\nLooks up a value by a JSON Pointer.\nLooks up a value by a JSON Pointer and returns a mutable …\nTakes the value out of the <code>Value</code>, leaving a <code>Null</code> in its …\nConvert a <code>T</code> into <code>serde_json::Value</code> which is an enum that …")