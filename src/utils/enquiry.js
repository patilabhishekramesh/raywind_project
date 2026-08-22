export async function submitEnquiry(payload) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Could not send your enquiry. Please try again.");
  }

  return data;
}
